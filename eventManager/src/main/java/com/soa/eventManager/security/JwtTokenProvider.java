package com.soa.eventManager.security;

import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@Slf4j
@Component
public class JwtTokenProvider {
    @Autowired
    private JwtContext jwtContext;

    Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(jwtContext.getHeaderString());
        if (token != null) {
            // parse the token.
            String user = Jwts.parser()
                    .setSigningKey(jwtContext.getSecret())
                    .parseClaimsJws(token.replace(jwtContext.getTokenPrefix(), ""))
                    .getBody()
                    .getSubject();

            String authorization= Jwts.parser()
                    .setSigningKey(jwtContext.getSecret())
                    .parseClaimsJws(token.replace(jwtContext.getTokenPrefix(), ""))
                    .getBody()
                    .get("role").toString();

            ArrayList<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(authorization));
            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, null, authorities) :
                    null;
        }
        return null;
    }
}