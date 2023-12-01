import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TEAM, Member } from '@data/index';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public map;
  public zm = 15;
  public team: Member[];
  public upcomingTalkTicketLink: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.team = TEAM;
  }

  ngOnInit() {

  }
}
