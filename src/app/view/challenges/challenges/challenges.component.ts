import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips'
import { Challenges } from '../../../modals/challenges'
import { ChallengeService } from 'src/app/services/challenges/challenge.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';
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
  addOnBlur: boolean = true;


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  searchTag: SearchTag[] = [];
  sponsorsTag: SearchTag[] = [];
  test: boolean = false;
  challengesForm: any = FormGroup
  selectedIndex: number = 0;
  minDate: Date;
  genderList: string[] = ['male', 'female', 'other'];
  mediaPreferenceList: string[] = ['photo', 'video']
  challengeList: any = []
  SFCatFilter: string = "ALL";
  SFCatFilterList: any[] = [{ "key": "ALL", "value": "ALL" }, { "key": "NAME", "value": "NAME" }, { "key": "SPONSOR", "value": "SPONSOR" }
    // ,{"key":"START DATE","value":"START_DATE"},{"key":"END DATE","value":"END_DATE"}
  ];

  constructor(private challengeService: ChallengeService, private sweetMsg: SweetAlertsService) { this.minDate = new Date(); }

  ngOnInit(): void {
    this.challengesForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      sponsor: new FormControl([]),
      description: new FormControl(''),
      reward: new FormControl(''),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      type: new FormControl(''),
      image: new FormControl(''),
      hashTag: new FormControl([]),
      for: new FormControl([]),
      mediaPreference: new FormControl(''),
      isDeleted: new FormControl(false)
    })
  }
  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }
  SubmitChallenge(submitForm: any) {
    if (!this.challengesForm.valid) {
      console.log("Invalid Data.");
      return
    } else {
      console.log("Submit Sucess Form : ", submitForm.value);

      let requestData: Challenges = {
        id: submitForm.value.id,
        name: submitForm.value.name,
        sponsor: this.sponsorsTag.length > 0 ? this.sponsorsTag.map(doc => doc.name) : [],
        description: submitForm.value.description,
        reward: submitForm.value.reward,
        startDate: submitForm.value.startDate,
        endDate: submitForm.value.endDate,
        type: submitForm.value.type,
        image: submitForm.value.image,
        hashTag: this.searchTag.length > 0 ? this.searchTag.map(doc => doc.name) : [],
        for: submitForm.value.for,
        mediaPreference: submitForm.value.mediaPreference,
        isDeleted: submitForm.value.isDeleted,
      }

      if (!requestData.id) {
        this.challengeService.createChallenge(requestData).subscribe((response: any) => {
          if (response.status && response.responseCode == 200) {
            this.sweetMsg.showSuccess(response.message);
          } else if (response.status && response.responseCode != 200) {
            this.sweetMsg.showError(response.message);
          } else if (!response.status) {
            this.sweetMsg.showError(response.message);
          }
        })
      } else {
        this.challengeService.updateChallenge(requestData).subscribe((response: any) => {
          if (response.status && response.responseCode == 200) {
            this.sweetMsg.showSuccess(response.message);
          } else {
            this.sweetMsg.showError(response.message);
          }
        })

      }
    }

  }

  activate(event: any, data: any) {

  }

  async updateChallenge(data: any) {
    console.log("data",data);
    // if(data.sponsor.length > 0){
      
    //   this.sponsorsTag=data.sponsor.map((s:string)=>{return {"name":s}}) 
    // }
    if(data.hashTag.length > 0){
      this.searchTag=data.hashTag.map((s:string)=>{return {"name":s}}) 
    }
    this.challengesForm.patchValue({
      id: data._id,
      name: data.name,
      sponsor: data.sponsor,
      description: data.description,
      reward: data.reward,
      startDate: new Date(data.startDate),
      endDate:new Date(data.endDate) ,
      type: data.type,
      image: data.image,
      hashTag: data.hashTag,
      for: data.for,
      mediaPreference: data.mediaPreference,
      isDeleted: data.isDeleted,
    })
    this.selectedIndex = await 0;
  }

  getChallengeList() {
    const requestObj = {
      "filterType": this.SFCatFilter,
      "selectedFilterValue": "Trends",
      "filterFromDate": new Date(),
      "filterToDate": new Date()
    }
    // this.challengeService.getChallengeList(requestObj).subscribe(response => {
      // if (response.success) {
        let response1 =  [
          {
              "_id": "6158349b50592e88c2b01ce5",
              "name": "Beautiful Smile",
              "sponsor": "Trends",
              "description": "test",
              "reward": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2022-10-02T10:30:50.019Z",
              "type": "famelinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          },
          {
              "_id": "6158349b50592e88c2b01ce6",
              "name": "Study Look",
              "sponsor": "Trends",
              "description": "test",
              "reward": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2021-01-01T10:30:50.019Z",
              "type": "famelinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          },
          {
              "_id": "615a9d6d3409ff68a91bfe19",
              "name": "High Jump Freeze",
              "sponsor": "Trends",
              "description": "test",
              "reward,": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2022-10-02T10:30:50.019Z",
              "type": "famelinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          },
          {
              "_id": "615a9d6d3409ff68a91bfe1a",
              "name": "Inspirational Look",
              "sponsor": "Trends",
              "description": "test",
              "reward": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2022-10-02T10:30:50.019Z",
              "type": "famelinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          },
          {
              "_id": "615a9d6d3409ff68a91bfe1b",
              "name": "Crazy Mind",
              "sponsor": "Trends",
              "description": "test",
              "reward": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2022-10-02T10:30:50.019Z",
              "type": "famelinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          },
          {
              "_id": "619a1ad359722ef5592bb435",
              "name": "Inspirational Look",
              "sponsor": "Trends",
              "description": "test",
              "reward": "nothing",
              "startDate": "2020-10-02T10:30:50.019Z",
              "endDate": "2022-10-02T10:30:50.019Z",
              "type": "funlinks",
              "image": "test",
              "hashTag": [
                  "fun",
                  "rocking"
              ],
              "for": [
                  "male",
                  "female"
              ],
              "mediaPreference": [
                  "photo",
                  "video"
              ],
              "isDeleted": false
          }
      ]
        this.challengeList = response1.map((doc: any) => {
          return {
            id: doc._id,
            name: doc.name,
            sponsor: doc.sponsor,
            description: doc.description,
            reward: doc.reward,
            startDate: new Date(doc.startDate).toISOString().slice(0,10),
            endDate:new Date(doc.endDate).toISOString().slice(0,10) ,
            type: doc.type,
            image: doc.image,
            hashTag: doc.hashTag,
            for: doc.for,
            mediaPreference: doc.mediaPreference,
            isDeleted: doc.isDeleted,
          }
        })
      // }
    // })
  }
  addTag(event: MatChipInputEvent, val: String): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim() && val == 'Hashtag') {
      this.searchTag.push({ name: value.trim() });
    }
    if ((value || '').trim() && val == 'Sponsors') {
      this.sponsorsTag.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(fruit: SearchTag, value: String): void {
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
