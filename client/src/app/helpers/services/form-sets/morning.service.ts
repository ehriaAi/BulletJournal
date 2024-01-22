import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MorningTable } from '../../models/morningTable';
import { PaginatedResult } from '../../models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MorningChecklist } from '../../models/morningChecklist';
import { map, of } from 'rxjs';
import { QuestionBase } from '../../models/form-models/questionBase';
import { SwitchQuestion } from '../../models/form-models/switchQuestion';

@Injectable({
  providedIn: 'root'
})
export class MorningService {
  baseUrl = environment.apiUrl;
  morningTable: MorningTable[] = [];
  paginatedResultMorning: PaginatedResult<MorningTable[]> = new PaginatedResult<MorningTable[]>;

  constructor(private http: HttpClient) { }

  addMorningChecklist(model: any) {
    return this.http.post<MorningChecklist>(
      this.baseUrl + 'checklist/addMorning', model);
  }

  getMorningChecklist(page?: number, itemsPerPage?: number) {
    let params = new HttpParams();

    if (page && itemsPerPage) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<MorningTable[]>(this.baseUrl + 'checklist/getMyMorningChecklists',
      {observe: 'response', params}).pipe(map(
        response => {
          if (response.body) this.paginatedResultMorning.result = response.body;
          const pagination = response.headers.get('Pagination');
          if (pagination) this.paginatedResultMorning.pagination = JSON.parse(pagination);
          return this.paginatedResultMorning;
        }
      ))
  }


  getQuestions() {
    const questions: QuestionBase<string | boolean>[] = [
      new SwitchQuestion({
        key: 'glassOfWater',
        label: 'Did you have a glass of water?',
        order: 2
      }),

      new SwitchQuestion({
        key: 'meds',
        label: 'Did you take your meds?',
        value: false,
        order: 3
      }),

      new SwitchQuestion({
        key: 'vitamins',
        label: 'Did you take your vitamins?',
        value: false,
        order: 4
      }),

      new SwitchQuestion({
        key: 'breakfast',
        label: 'Did you eat breakfast?',
        value: false,
        order: 5
      }),
      
      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),
    ];
    console.log(questions)

    return of(questions.sort((a, b) => a.order - b.order));
  }
}