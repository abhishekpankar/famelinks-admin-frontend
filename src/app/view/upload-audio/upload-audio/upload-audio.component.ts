import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/services/audio/audio.service';
import { SweetAlertsService } from 'src/app/services/sweetMsg/sweet-alerts.service';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-upload-audio',
  templateUrl: './upload-audio.component.html',
  styleUrls: ['./upload-audio.component.css']
})
export class UploadAudioComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef | any;
  uploadObj: any = {};
  selectedIndex: number = 0;
  showNotifyList: boolean = false;
  uploadList: any[] = [];
  previewImage: string = ''
  
  constructor(private audioService: AudioService, private sweetMsg: SweetAlertsService, private uploadService: UploadService) { }

  ngOnInit(): void {
    // this.getNotifyList();
  }

  onTabClick(event: any) {
    this.selectedIndex = event.index;
  }

  getUploadedAudioList(){
    this.audioService.getAudioList().subscribe((response: any)=>{
      if(response.success){
        this.uploadList =response.result.map((doc:any)=>{
          return{
            id:doc._id,
            music:doc.music ? "https://famelinks.s3.ap-south-1.amazonaws.com/funlinks-songs/"+doc.music:null,
            by:doc.by,
            name:doc.name,
            duration:doc.duration ? this.secondsToHms(doc.duration):'NA',
          }
        })
        this.showNotifyList = true;
        this.sweetMsg.showSuccess(response.message);
      } else {
        this.sweetMsg.showError(response.message);
      }
    })
  }

   secondsToHms(d:number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

  async upload(event: any, type: string) {
    if(this.uploadObj.music && type == 'audio'){
      await this.deleteImages(this.uploadObj.music);
      this.uploadObj.music = null;
    }
    if (event.target.files.length > 0) {

      const formData = new FormData();
      formData.append('audio', event);
      formData.append('fileName', 'test.mp3');

      // let inputEll: HTMLInputElement = this.inputEl.nativeElement;
      // let fileCount: any = inputEll.files?.length;
      // let formData:any = new FormData();
      // if (fileCount > 0) { // a file was selected
      //   for (let i = 0; i < fileCount; i++) {
      //     if(inputEll.files){
      //       formData.append('file[]', inputEll.files.item(i));
      //     }
      //   }
        this.audioService.uploadAudioFile(formData).subscribe(data=>{
          console.log("music upload response data : ",data);
          
        })
      // }
  
      // const { downloadUrl$, uploadProgress$ } = await this.uploadService.uploadFileAndGetMetadata('notification/',event.target.files[0]);
      // uploadProgress$.subscribe((bar: any)=>{
      //   if(type == 'thumbnail'){
      //     this.uploadObj.thumbprogress = bar;
      //     if(bar === 100){
      //       downloadUrl$.subscribe((url: any)=>{
      //         this.uploadObj.small_image_url = url;
      //       })
      //     }
      //   }else{
      //     this.uploadObj.coverprogress = bar;
      //     if(bar === 100){
      //       downloadUrl$.subscribe((url: any)=>{
      //         this.uploadObj.large_image_url = url;
      //       })
      //     }
      //   }
      // })
    }
  }

  async deleteImages(url: string){
      let msg : any;
      this.sweetMsg.confirmMsg('Are you sure? Do you want to change this file?');
      msg = await this.sweetMsg.confirmMsg('Are you sure? Do you want to change this file?');
      if(msg){
        let delMsg: any;
        delMsg = await this.uploadService.delete_file(url);
        if(!delMsg){
          this.sweetMsg.showError('Image not found')
        }
      }
  }

  openTableImg(img: string){
    this.previewImage = img;
  }

  async updateNotify(data: any){
    this.selectedIndex = await 0;
    this.uploadObj = data;
  }

  async submit(data: any){
    let validMsg = await this.formValidate();
		if (validMsg) {
			this.sweetMsg.showError(validMsg);
			return
		}
    let req: any = {
      "title": data.title ,
      "body": data.body ,
      "small_image_url": data.small_image_url ,
      "large_image_url": data.large_image_url  
    }
    // if(data.id){
    //   req['id'] = data.id;
    //   this.audioService.updateAudioDocument(data.id, req).subscribe((resp: any)=>{
    //     if(resp && resp.status){
    //       this.uploadList = this.uploadList.map((itm: any)=>{
    //         if(itm.id == resp.data.notification.id){
    //           itm = resp.data.notification;
    //         }
    //         return itm
    //       });
    //      this.sweetMsg.showSuccess(resp.message);
    //      this.clearNotify();
    //    }else{
    //       this.sweetMsg.showError(resp.message);
    //     }
    //   })
    // } else {
    //   this.audioService.createAudioDocument(req).subscribe((resp: any)=>{
    //     if(resp && resp.status){
    //       this.uploadList.unshift(resp.data.notification);
    //      this.sweetMsg.showSuccess(resp.message);
    //      this.clearNotify();
    //    }else{
    //       this.sweetMsg.showError(resp.message);
    //     }
    //   })
    // }
  }



  formValidate() {
		if (!this.uploadObj.title) {
			return 'Title is required!'
		} else if (!this.uploadObj.body) {
			return 'Body is required'
		} else if (!this.uploadObj.small_image_url) {
			return 'Thumbnail is required'
		} else {
			return null
		}
	}

  clearNotify(){
    this.uploadObj = {};
  }

}
