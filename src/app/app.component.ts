import { Component } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { DataService } from './data.service';
import { Note } from './note.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})

export class AppComponent { 

    items: MenuItem[] = []
    public notes: Note[] | undefined
    public selectedNote: Note | undefined    
    public title = 'angular12'
    private authorId = 1
    public newNote: Note | undefined

    constructor(private dataService: DataService, private messageService: MessageService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];

        this.dataService.getNote(this.authorId).subscribe((data: Note[]) => {   
            this.notes = data
        });
    }

    public viewNotes(note: Note){
        console.log("note edit", note);
        this.selectedNote = note;
    }
    public getSelectedClass(note: Note): string{
        if(!this.selectedNote){
            return '';
        }
        return this.selectedNote.id === note.id ? 'selected' : 'nonSelected';
    }

    public addNote(){
        this.newNote = {
          id: 0,
          title: '',
          note: '',
          author: '',
          authorId: this.authorId,
        };
    }

    public saveNote(){
        // console.log('save Note', this.newNote);
        if (!this.newNote) {
            return;
        }
        this.dataService.postNote(this.newNote).subscribe((note) => {
            // console.log('result ', note);
            this.notes?.push(note);
            this.newNote = undefined;
            this.messageService.add({
                severity: 'success',
                summary: 'Thông báo',
                detail: 'Đã thêm thành công',
              });
        });
    }

    public cancelAddNote(){
        this.newNote = undefined;
        this.messageService.add({
            severity: 'info',
            summary: 'Thông báo',
            detail: 'Đã hủy',
          });
    }

}
