import {Questions} from "./questions";

export interface Quizz{
  _id: string;
  title: string;
  smallDescr: string;
  descr:  string;
  questions: Array<Questions>
}
