import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent} from '@angular/material/chips'
export interface SearchTag {
  name: string;
}

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur:boolean = true;

  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  searchTag: SearchTag[] = [];
  sponsorsTag: SearchTag[] = [];
  test: boolean = false;
  challengesForm: any = FormGroup
  selectedIndex: number = 0;
  minDate: Date;
  genderList: string[] = ['male', 'female', 'other'];
  mediaPreferenceList: string[] = ['photo', 'video']

  SFCatFilter: string = "";
  SFCatFilterList: any[] = [];

  constructor() { this.minDate = new Date(); }

  ngOnInit(): void {
    this.challengesForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      sponsor: new FormControl([], [Validators.required]),
      description: new FormControl(''),
      reward: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      type: new FormControl(''),
      image: new FormControl(''),
      hashTag: new FormControl([]),
      for: new FormControl([]),
      mediaPreference: new FormControl('')
    })
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }
  SubmitChallenge(submitForm: any) {
    if (!this.challengesForm.valid) {
      console.log("submitForm : ", submitForm.value);

      return
    }

  }

  
  addTag(event:MatChipInputEvent,val:String): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim() && val == 'Hashtag') {
      this.searchTag.push({name: value.trim()});
    }
    if ((value || '').trim() && val == 'Sponsors') {
      this.sponsorsTag.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(fruit: SearchTag,value:String): void {
    const index = this.searchTag.indexOf(fruit);
    const sponsorsTagIndex = this.sponsorsTag.indexOf(fruit);

    if (index >= 0 && value == 'Hashtag') {
      this.searchTag.splice(index, 1);
    }
    
    if (sponsorsTagIndex >= 0 && value == 'Sponsors') {
      this.sponsorsTag.splice(index, 1);
    }
  }
}
