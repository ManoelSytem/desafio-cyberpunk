import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from '../Profile';
import { Clone } from '../clone';
Profile
@Component({
  selector: 'app-clone-forms',
  templateUrl: './clone-forms.component.html',
  styleUrls: ['./clone-forms.component.css']
})
export class CloneFormsComponent implements OnInit {

  allProfiles: Profile[];
  clone = new Clone();

  constructor() {
    this.allProfiles = [
      new Profile('01', 'braço mecânico'),
      new Profile('03', 'esqueleto reforçado'),
      new Profile('04', 'sentidos aguçados'),
      new Profile('05', 'pele adaptativa'),
      new Profile('06', ' raio laser')
  ];
  }

  onFormSubmit(form: NgForm){

    /*let profile: Profile[] = form.controls['profile'].value;
	  
	  let newClone = new Clone();
	  newClone.nome = "Manoel neto";
	  newClone.idade = '24';
    newClone.PerfilClone = profile;
    
    */

   let userTechnologies: Profile[] = form.controls['profile'].value;
   for (let i=0; i < this.clone.PerfilClone.length; i++) {
    console.log("Profile Id: " + this.clone.PerfilClone[i].prName);
  }
  


 } 
  

  ngOnInit() {
  }
 
}


