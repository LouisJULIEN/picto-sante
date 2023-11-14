import {Component, OnInit} from '@angular/core';
import {closest} from "fastest-levenshtein";
import searchClosestPicture from "../../assets/health-icons/filled/metadata.json"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private pictureKeywords = Object.keys(searchClosestPicture).map(this.asciiFold)
  public selectedPicturesPath: string[]
  public userInputValue:string = " oreille\nadn\nbras\n"

  constructor() {
  }

  ngOnInit(): void {
    this.onUserChangedText()
  }

  onUserChangedText() {
    this.selectedPicturesPath = this.userTextToPicturePath()
  }

  private userTextToPicturePath() {

    const sanitizedText = this.asciiFold(
      this.userInputValue
        .replace(/ +/g, " ") // remove duplicated spaces
        .replace(/\n+/g, '\n') // remove duplicated carriage return
        .replace(/\t+/g, '\t') // remove duplicated tabs
        .replace(/$\n+/, '') // remove starting carriage return
    )


    return sanitizedText.split('\n').map((x: string) => this.searchClosestPicturePath(x))
  }

  private searchClosestPicturePath(textToSearch: string): string {
    if (textToSearch === "") {
      return 'empty.png'
    }
    const result = closest(textToSearch, this.pictureKeywords)
    // @ts-ignore
    return searchClosestPicture?.[result].path
  }

  private asciiFold(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
