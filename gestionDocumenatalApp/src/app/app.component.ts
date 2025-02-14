import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Forms {
  nombre: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly path: string = 'formularios';
  private readonly firestore = inject(Firestore);
  private readonly collection = collection(this.firestore, this.path);
  
  //item$ = collectionData(this.collection) as Observable<Forms[]>;

  async ngOnInit() {
    
  }
}
