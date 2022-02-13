import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadAudioRoutingModule } from './upload-audio-routing.module';
import { UploadAudioComponent } from './upload-audio/upload-audio.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/modals/app-material/app-material.module';


@NgModule({
  declarations: [
    UploadAudioComponent
  ],
  imports: [
    CommonModule,
    UploadAudioRoutingModule,
    FormsModule,
    AppMaterialModule
  ]
})
export class UploadAudioModule { }
