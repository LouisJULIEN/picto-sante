import {Component, OnInit} from '@angular/core';
import {closest} from "fastest-levenshtein";
import searchClosestPicture  from "../../assets/health-icons/filled/metadata.json"


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  public result: string = "oé"
  private pictureKeywords = Object.keys(searchClosestPicture)
  constructor() {
  }

  ngOnInit(): void {
    this.result = this.searchClosestPicturePath('vessssie')
  }

  searchClosestPicturePath(textToSearch: string): string {
    const result = closest(textToSearch, this.pictureKeywords)
    // @ts-ignore
    return searchClosestPicture?.[result].path
  }

}
