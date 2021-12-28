import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertsService {
  Toast: any;
  constructor() {
    this.Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      allowEscapeKey: true,
      // onOpen: (toast) => {
      //   toast.addEventListener('mouseenter', Swal.stopTimer)
      //   toast.addEventListener('mouseleave', Swal.resumeTimer)
      // }
      // onClose:(toast)=>{
      //   toast.removeEventListener('scx',Swal.)
      // }
    })
  }

  showSuccess(customTitle: any) {
    return this.Toast.fire({
      icon: 'success',
      title: customTitle
    });
  }
  showUpdate(customTitle: any) {
    return this.Toast.fire({
      icon: 'success',
      title: customTitle
    })
  }
  showInfo(customTitle: any) {
    return this.Toast.fire({
      icon: 'info',
      title: customTitle
    })
  }
  showError(customTitle: any) {
    return this.Toast.fire({
      icon: 'error',
      title: customTitle
    })
  }

  showWarning(customTitle: any) {
    return this.Toast.fire({
      icon: 'warning',
      title: customTitle
    })
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'warning',
    //   title: customTitle,
    //   showConfirmButton: true,
    // })
  }

  async confirmMsg(title: string) {
    return await Swal.fire({
      title: title,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        return 1
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        return 0
        // Swal.fire('Changes are not saved', '', 'info')
      } else{
        return 0
      }
    })
  }
}
