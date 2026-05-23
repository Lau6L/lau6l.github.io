import { Component } from '@angular/core';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  imports: [
    CdkCopyToClipboard
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
}
