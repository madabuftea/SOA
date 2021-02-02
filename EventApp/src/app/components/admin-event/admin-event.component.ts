import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EventService } from 'src/app/services/event-service/event.service';
import { Router } from '@angular/router';
import { AuthDataStorage } from 'src/app/security/auth-data-storage';
import { User } from 'src/app/shared/data-types/User';
import { Event } from 'src/app/shared/data-types/Event';
import { Observable } from 'rxjs';
import { AdminGuard } from 'src/app/security/guards/admin-guard';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss']
})
export class AdminEventComponent implements OnInit {

  events: Event[] = [];
  //events$: Observable<Event[]>;
  title: string;
  location: string;
  date: string;
  user: User;
  event: Event = new Event();

  constructor(
    private service: EventService,
    private dialog: MatDialog,
    public router: Router,
    public authStorage: AuthDataStorage
    ) { }

  ngOnInit() {
    this.user = this.authStorage.getLoggedUser();
    console.log(this.user);

    // this.events$ = this.service.getEvents();
    // console.log("$",this.events$);

    this.service.getEventsByUserId(this.user.userId).subscribe(
      data => {
        this.events = data;
        console.log(this.events);
        
      }
    )

  }

  delete(e: Event) {
    this.service.removeEvent(e).subscribe(
      data => {
        this.events = data;
        console.log("events after delete", data)
      }
    )
    //this.events$ = this.service.removeEvent(e);
  }

  openAddEventModal(): void{
    const dialogRef = this.dialog.open(EventAddDialog, {
      width: '600px',
       data: {title: this.title, location: this.location, date: this.date},
       panelClass : "formFieldWidth480"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.event.title = result.title;
      this.event.location = result.location;
      this.event.date = result.date;
      console.log(this.event);
      this.event.userId = this.user.userId;
      this.service.addEvent(this.event).subscribe(data => {
        console.log("event after db", data);
        this.events.push(data);
      })
      // this.events$ = this.service.getEvents()
      // console.log(this.events$);
      
    });
  }

    canActivate() {
      if(this.authStorage.getUserRole() === "ADMIN"){
        return true;
    }
    }
}


@Component({
  selector: 'event-add-dialog',
  templateUrl: 'event-add-dialog.html',
})
export class EventAddDialog {

  constructor(
    public dialogRef: MatDialogRef<EventAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: AdminEventComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
