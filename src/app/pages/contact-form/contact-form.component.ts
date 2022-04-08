import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Message } from '../../model/message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('messageTextarea') messageTextarea: ElementRef | undefined;

  messageEl: Message = new Message();
  nameAndSurnameNotValid = false;
  emailNotValid = false;
  phoneNoNotValid = false;
  messageNotValid = false;

  scrollHeight: number | undefined;
  formGroup: FormGroup;
  textareaLength = '0';
  constructor(public router: Router) {
    window.scroll(0, 0);
    this.formGroup = new FormGroup({
      nameAndSurname: new FormControl('', [Validators.required]),
      companyName: new FormControl('', []),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNo: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
      message: new FormControl('', [Validators.maxLength(1500)]),
    });
  }
  get nameAndSurname() {
    return this.formGroup.get('nameAndSurname');
  }
  get companyName() {
    return this.formGroup.get('companyName');
  }
  get email() {
    return this.formGroup.get('email');
  }
  get phoneNo() {
    return this.formGroup.get('phoneNo');
  }
  get message() {
    return this.formGroup.get('message');
  }
  submitForm() {
    if (this.formGroup.valid) {
      this.messageEl.nameNadSurname = this.nameAndSurname?.value;
      this.messageEl.companyName = this.companyName?.value;
      this.messageEl.email = this.email?.value;
      this.messageEl.phoneNo = this.phoneNo?.value;
      this.messageEl.message = this.message?.value;
    } else {
      if (!this.nameAndSurname?.valid) this.nameAndSurnameNotValid = true;
      else this.nameAndSurnameNotValid = false;
      if (!this.email?.valid) this.emailNotValid = true;
      else this.emailNotValid = false;
      if (!this.phoneNo?.valid) this.phoneNoNotValid = true;
      else this.phoneNoNotValid = false;
      if (!this.message?.valid) this.messageNotValid = true;
      else this.messageNotValid = false;
      console.log(this.email?.valid);
    }
  }
  recountTextareaAmount(event: Event) {
    let elementHeight = this.messageTextarea?.nativeElement.offsetHeight;
    this.scrollHeight = this.messageTextarea?.nativeElement.scrollHeight;
    if (elementHeight <= this.scrollHeight!) {
      elementHeight = this.messageTextarea?.nativeElement.scrollHeight + 18;
      this.messageTextarea!.nativeElement.style.height = `${elementHeight}px`;
    }
    var input: string = this.message?.value;
    this.textareaLength = input.length.toString();
  }

  ngOnInit(): void {}

  ngAfterInit(): void {
    this.scrollHeight = this.messageTextarea?.nativeElement.scrollHeight;
  }
}
