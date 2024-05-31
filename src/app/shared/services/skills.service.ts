import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  skills = [
    {
      title: 'Angular',
      icon: 'angular.png',
    },
    {
      title: 'TypeScript',
      icon: 'typescript.png',
    },
    {
      title: 'JavaScript',
      icon: 'javascript.png',
    },
    {
      title: 'HTML',
      icon: 'html.png',
    },
    {
      title: 'Firebase',
      icon: 'firebase.png',
    },
    {
      title: 'GIT',
      icon: 'git.png',
    },
    {
      title: 'CSS',
      icon: 'css.png',
    },
    {
      title: 'Rest-Api',
      icon: 'api.png',
    },
    {
      title: 'Scrum',
      icon: 'scrum.png',
    },
    {
      title: 'Material design',
      icon: 'material.png',
    },
  ];
}
