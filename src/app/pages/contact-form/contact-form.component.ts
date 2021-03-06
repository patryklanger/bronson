import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../../model/message';
import { SendEmailService } from '../../service/send-email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @ViewChild('messageTextarea') messageTextarea: ElementRef | undefined;

  messageEl: Message = new Message();

  scrollHeight: number | undefined;
  formGroup: FormGroup;
  textareaLength = '0';
  constructor(
    public router: Router,
    private sendMessageService: SendEmailService
  ) {
    window.scroll(0, 0);
    this.formGroup = new FormGroup({
      nameAndSurname: new FormControl('', [Validators.required]),
      companyName: new FormControl('', []),
      email: new FormControl('', [
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
        ),
        Validators.required,
      ]),
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
  submitForm(event: Event) {
    this.formGroup.markAllAsTouched();
    console.log(this.formGroup.valid);
    if (this.formGroup.valid) {
      this.messageEl.nameNadSurname = this.nameAndSurname?.value;
      this.messageEl.companyName = this.companyName?.value;
      this.messageEl.email = this.email?.value;
      this.messageEl.phoneNo = this.phoneNo?.value;
      this.messageEl.message = this.message?.value;
      this.sendMessageService.sendMessage(this.messageEl).subscribe({
        next: () => {
          this.router.navigateByUrl('/thank-you');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  formSubmit(event: Event) {
    if (!this.formGroup.valid) {
      const yOffset = -150;
      const element = document.getElementById('contactForm');
      const y =
        element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  recountTextareaAmount(event: Event) {
    var input: string = this.message?.value;
    if (input.length > 1500) {
      input = input.slice(0, 1500);
      this.message?.setValue(input);
    }
    this.textareaLength = input.length.toString();
  }

  ngOnInit(): void {}

  ngAfterInit(): void {
    this.scrollHeight = this.messageTextarea?.nativeElement.scrollHeight;
  }
}
