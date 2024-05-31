import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  skills = [
    {
      title: 'angular',
      icon: 'angular.png',
    },
    {
      title: 'typescript',
      icon: 'typescript.png',
    },
    {
      title: 'javascript',
      icon: 'javascript.png',
    },
    {
      title: 'material',
      icon: 'material.png',
    },

    {
      title: 'firebase',
      icon: 'firebase.png',
    },

    {
      title: 'scrum',
      icon: 'scrum.png',
    },
    {
      title: 'html',
      icon: 'html.png',
    },
    {
      title: 'css',
      icon: 'css.png',
    },
    {
      title: 'git',
      icon: 'git.png',
    },
    {
      title: 'api',
      icon: 'api.png',
    },
  ];
}
