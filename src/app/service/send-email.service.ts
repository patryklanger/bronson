import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  messageStruct = {
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  sendMessage(message: Message) {
    this.messageStruct.email = message.email;
    this.messageStruct.message = `Wiadomość od: ${message.nameNadSurname} z firmy ${message.companyName}.\n
                                  Treść wiadomości:\n
                                  ${message.message}\n
                                  Dane kontaktowe:\n
                                  nr tel: ${message.phoneNo}\n
                                  email: ${message.email}`;
    return this.http.post(
      'https://formspree.io/f/mbjwzrzz',
      this.messageStruct
    );
  }
}
