import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadAudioComponent } from './upload-audio/upload-audio.component';

const routes: Routes = [{
  path: '',
  component: UploadAudioComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadAudioRoutingModule { }
