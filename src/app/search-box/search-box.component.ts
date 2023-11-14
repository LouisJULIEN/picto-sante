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

  constructor() {
  }

  ngOnInit(): void {
  }

  onUserChangedText(textChangeEvent: Event): string[] {
    const newText = (textChangeEvent.target as HTMLInputElement).value;

    const sanitizedText = this.asciiFold(
      newText.replace(/ +/g, " ")
        .replace(/\n+/g, '\n')
        .replace(/\t+/g, '\t')
    )

    return sanitizedText.split('\n').map((x: string) => this.searchClosestPicturePath(x))
  }

  searchClosestPicturePath(textToSearch: string): string {
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
