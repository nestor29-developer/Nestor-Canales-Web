import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';
import { HomeObservable } from '../../home/home.observable';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  value = '';
  form: FormGroup = this.fb.group({
    text: new FormControl('', Validators.compose([Validators.required])),
  });
  durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private homeObservable: HomeObservable,
    private router: Router,
    private _snackBar: MatSnackBar,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {}

  getFormControl(controlname: string) {
    return this.form.get(controlname);
  }

  onSendData(): void {
    const id = this.getFormControl('text')?.value;
    const idPost = parseInt(id);

    this.postsService.getPost(idPost).subscribe(
      (post: any) => {
        if (post) {
          const payload = {
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body,
          };
          this.homeObservable.setDataResObs(payload);
          this.router.navigate(['/home/detail']);
        }
      },
      (err: any) => {
        this.openSnackBar(err.message);
      }
    );
  }

  isNumberKey(evt: any): boolean {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    } else {
      return true;
    }
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
    });
  }
}
