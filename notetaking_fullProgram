/** JavaScript-Class-LOS-XVI-Assignment
Javascript assingment 1 
Author: Wilfred **/


function NotesApplication(author){
	this.author = author;
	this.note = [];
	this.create = function(note_content){
		if(note_content !== ''){
			this.note.push(note_content);
			console.log( note_content +" created" );
		}
	};
	
	
	this.listNotes = function(){
		var noteoutput;
		for(var i = 0; i < this.note.length; i++){
			noteoutput='';
			noteoutput += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+'\n';
			console.log(noteoutput);
		}
	};

	this.getNote = function(note_id){
			var noteoutput = this.note[note_id];
			console.log(noteoutput);
		};

	this.search = function(search_text){
		var noteoutput='';
		noteoutput += 'results for search  '+ search_text+ '\n';
		for(var i = 0; i < this.note.length; i++){
			if(this.note[i].includes(search_text)){
				noteoutput += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+ '\n';
				console.log(noteoutput);
			}
		}
	};
	
	this.delete = function(note_id){
			this.note.splice(note_id, 1);
			console.log( 'Note at ' +note_id+ ' deleted');
		};
		

	this.edit = function(note_id, new_content){
			if(new_content !==''){
				this.note[note_id]=new_content;
				console.log(new_content +' saved');
			}
		};
}

var justice_league = new NotesApplication("justice_league");

justice_league.create("Javascript is no more a child's play");
justice_league.create("Its a language you need to learn");
justice_league.create("Good to know");
justice_league.create("Try it out");
justice_league.listNotes();
justice_league.delete(2);
justice_league.edit(2,"new Content");
justice_league.listNotes();
console.log(justice_league.search("more"));
