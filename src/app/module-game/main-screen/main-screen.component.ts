/*© 2022 Bollywood Game
Author : Rutuja K Gholap
File Info :  Main screen component TS File
*/

import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { IBollywood } from '../interfaces/bollywood-interface';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: [ './main-screen.component.css' ],
  providers: [ MessageService ]
})

export class MainScreenComponent implements OnInit {

  bollywood: IBollywood;
  items: MenuItem[] = [];
  private static counter: number = 0;
  actorFirstLetter: string = ''
  actressFirstLetter: string = ''
  movieFirstLetter: string = ''
  songFirstLetter: string = ''
  position: string = '';
  hintsDescription: any;
  hintArray: string[] = []

  displayHelpModal: boolean = false;
  visibleHint: boolean = false;
  gameEndDialog: boolean = false;
  public clicked = false;


  obj = [
    { actor: 'Ranbir Kapoor', actress: 'Alia Bhatt', movie: 'Brahmastra', song: 'Song' },
    { actor: 'Salman Khan', actress: 'Anushka Sharma', movie: 'Sultan', song: 'Song' },
    { actor: 'Akshay Kumar', actress: 'Sonakshi Sinha', movie: 'Rowdy Rathore', song: 'Song' },
    { actor: 'Shah Rukh Khan', actress: 'Preity Zinta', movie: 'Veer Zaara', song: 'Song' },
    { actor: 'Aamir Khan', actress: 'Kareena Kapoor', movie: 'Talaash', song: 'Song' },
    { actor: 'Ranveer Singh', actress: 'Alia Bhatt', movie: 'Gully Boy', song: 'Song' },
    { actor: 'Aamir Khan', actress: 'Anushka Sharma', movie: 'PK', song: 'Song' },
    { actor: 'Vicky Kaushal', actress: 'Alia Bhatt', movie: 'Raazi', song: 'Song' },
    { actor: 'Shahid Kapoor', actress: 'Kareena Kapoor', movie: 'Jab We Met', song: 'Song' },
    { actor: 'Shah Rukh Khan', actress: 'Deepika Padukone', movie: 'Chennai Express', song: 'Song' },
    { actor: 'Ranveer Singh', actress: 'Deepika Padukone', movie: 'Ram Leela', song: 'Song' },
  ];

  constructor(private messageService: MessageService, private renderer2: Renderer2, private elementRef: ElementRef) {
    this.bollywood = {} as IBollywood;
  }

  ngOnInit(): void {
    MainScreenComponent.counter = 0;
    this.hintArray = [
      "Film released in 2022. A young man on the brink of falling in love gets his world turned upside down when he discovers he has the power to control fire and a connection to a secret society of guardians.",
      "Film released in 2016.The movie is based on olmpyics game. Actor & Actress both play for olmpyics. We have one of the 'Khans' present in movie...",
      "Film released in 2012 which is remake of Southern film. Actor is brave police officer, dies at the hands of corrupt politicians. But his team replaces him with Shiva, a thief who happens to be his look-alike, in an attempt to catch the culprits.",
      "Film released in 2004. Love blooms between an Indian pilot and a Pakistani girl. As actor spends his years in a Pakistani prison, actress believes him to be dead and devotes her life to his village in India. Songs from this movie are always played on Independence Day. Most songs in this movie are sung by Lata Mangeshkar.",
      "Film released in 2012.Murder mystery movie, Inspector Shekhawat and his wife are stunned when their son dies. While his wife openly struggles to deal with her loss, he distracts himself by solving the mysterious death of an actor.",
      "Film released in 2019. Actor struggles to convey his views on social issues and life in Dharavi through rapping. His life changes drastically when he meets a local rapper.Film inspired by the lives of Indian street rappers DIVINE and Naezy directed by Zoya Akhtar.",
      "Film released in 2014. An innocent alien lands on Earth but loses his communication device. He meets actress, a heartbroken reporter, and tries to find his device. With time, he raises many thought-provoking questions.Film is directed by Rajkumar Hirani who has given comedy hits like 'Munna Bhai MBBS', so this movie is one of such hits.",
      "Film released in 2018. Actress is an undercover RAW agent, is married into a Pakistani family by her father so that she can get some valuable piece of information about the enemy. Patrotic song from this movie is a hit.",
      "Film released in 2007. Actor is a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets actress, a bubbly Punjabi girl, and gets pulled into her crazy life.'Aaj tak life mein ek train nahi chhuti meri!'",
      "Film released in 2013. A young man, sets out to immerse his late grandfather's ashes at Rameshwaram. However, when he helps actress, a runaway bride, board a train, he has to face the ire of her criminal family.",
      "Film released in 2013. Film is an Indian adaptation of Shakespeare's Romeo and Juliet directed by Bhansali. The film follows the love story of a crossed stared couple who falls in love but cannot be together since their families have been rivals since ages."
    ]

    this.items = []
    this.breakTheFirstLetter();
  }

  onClick() {
    this.compareTheObjects()
  }

  compareTheObjects() {
    var keepCheck: number = 0;
    if (this.checkForEmptyFields()) {
      if (this.obj[ MainScreenComponent.counter ].actor.toUpperCase() == this.bollywood.actor.toUpperCase() ||
        this.obj[ MainScreenComponent.counter ].actor.toUpperCase().includes(this.bollywood.actor.toUpperCase())) {
        keepCheck = 1
        console.log(keepCheck)
        if (this.obj[ MainScreenComponent.counter ].actress.toUpperCase() == this.bollywood.actress.toUpperCase() ||
          this.obj[ MainScreenComponent.counter ].actress.toUpperCase().includes(this.bollywood.actress.toUpperCase())) {
          keepCheck = 2
          console.log(keepCheck)
          if (this.obj[ MainScreenComponent.counter ].movie.toUpperCase() == this.bollywood.movie.toUpperCase() ||
            this.obj[ MainScreenComponent.counter ].movie.toUpperCase().includes(this.bollywood.movie.toUpperCase())) {
            keepCheck = 3
            console.log(keepCheck)
            // if (this.obj[ MainScreenComponent.counter ].song.toUpperCase() == this.bollywood.song.toUpperCase() ||
            //   this.obj[ MainScreenComponent.counter ].song.toUpperCase().includes(this.bollywood.song.toUpperCase())) {
            //   keepCheck = 4
            //   console.log(keepCheck)
            // }
            // else {
            //   this.messageService.add({ key: 'top-center', severity: 'info', summary: 'Try Again!', detail: 'You got song wrong here', icon: 'pi-angle-right' });
            //   console.log("You got song woring here")
            //   console.log(keepCheck)
            // }
          }
          else {
            this.messageService.add({ key: 'top-center', severity: 'info', summary: 'Try Again!', detail: 'You got movie wrong here', icon: 'pi-angle-right' });
            console.log("You got movie wrong here")
            console.log(keepCheck)
          }
        }
        else {
          this.messageService.add({ key: 'top-center', severity: 'info', summary: 'Try Again!', detail: 'You got actress wrong here', icon: 'pi-angle-right' });
          console.log("You got actress wrong here")
          console.log(keepCheck)
        }
      }
      else {
        this.messageService.add({ key: 'top-center', severity: 'info', summary: 'Try Again!', detail: 'You got hero wrong here', icon: 'pi-angle-right' });
        console.log("You got hero wrong here")
        console.log(keepCheck)
      }

      if (keepCheck == 3) {
        this.messageService.add({ key: 'top-center', severity: 'custom', summary: 'Done', detail: 'You have guessed it right, well done!!!', icon: 'pi-angle-right' });
        this.moveToNextRound();
      }
      else {
        console.log('Try it')
      }
    }
    else {
      this.messageService.add({ key: 'error', severity: 'custom', summary: 'Please Check', detail: 'You have not entered value in fields.', icon: 'pi-angle-right' });
    }
  }

  breakTheFirstLetter() {
    this.actorFirstLetter = this.obj[ MainScreenComponent.counter ].actor.substring(0, 1).toUpperCase()
    this.actressFirstLetter = this.obj[ MainScreenComponent.counter ].actress.substring(0, 1).toUpperCase()
    this.movieFirstLetter = this.obj[ MainScreenComponent.counter ].movie.substring(0, 1).toUpperCase()
    this.songFirstLetter = this.obj[ MainScreenComponent.counter ].song.substring(0, 1).toUpperCase()
  }

  clearFields() {
    this.bollywood = {} as IBollywood;
    this.bollywood.actor = '';
    this.bollywood.actress = '';
    this.bollywood.song = '';
    this.bollywood.movie = '';
  }

  howToPlayGameModal(position: string) {
    this.position = position;
    this.displayHelpModal = true
  }

  hintsForGame() {
    this.visibleHint = true
    this.hintsDescription = this.hintArray[ MainScreenComponent.counter ]
  }

  moveToNextRound() {
    let objLength = this.obj.length - 1;
    if (MainScreenComponent.counter != objLength) {
      MainScreenComponent.counter = MainScreenComponent.counter + 1;
      this.clearFields();
      this.breakTheFirstLetter()
    }
    else {
      this.gameEndDialog = true;
      this.clearFields();
    }
  }

  checkForEmptyFields() {
    if (this.isEmpty(this.bollywood.actor) || this.isEmpty(this.bollywood.actress) || this.isEmpty(this.bollywood.movie)) {
      return false
    }
    else {
      return true
    }
  }

  isEmpty(val: any) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  startFromBeginning() {
    this.gameEndDialog = false;
    this.clearFields();
    this.ngOnInit()
  }
}