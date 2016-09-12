
var input = $("#noteText");
var list = $("#notes-list");

var note = $("<div class='note'>" +
                "<p class='note-text'>Test Note</p>" +
                "<input class='note-mod note-text' type='text' value=''>" +
                "<div>" +
                  "<button type='button' name='modify'>Modify</button>" +
                  "<button class='note-mod' type='button' name='update'>Update</button>" +
                  "<button type='button' name='delete'>Delete</button>" +
                "</div>" +
              "</div>")

function compileNote(noteData) {
  var newN = note.clone()
  newN.children("p").text(noteData.text);
  newN.css("background-color", noteData.color);
  return newN;
}


$("button[name='submit']").click(function(e){
  var newNote = {};
  newNote.color = $("#colorSelect option:selected").val();
  newNote.text = input.val();
  input.val("");
  console.log(newNote);
  var compiledNote = compileNote(newNote)
  list.append(compiledNote)
})

$(document).on("click","button[name='delete']", function(e){
  this.closest(".note").remove()
})

$(document).on("click","button[name='modify']", function(e){
  var note = $(this).closest(".note");
  var input = note.children(".note-text");
  $(this).addClass("note-mod");
  input.removeClass("note-mod");
  var update = note.children("button[name='update']")
  update.removeClass("note-mod");
  this.closest(".note-text").val()
})

$(document).on("click","button[name='update']", function(e){
  var note = $(this).closest(".note");
  var input = note.closest(".note-text");
  var text = note.closest("p");
  $(this).addClass("note-mod");
  input.addClass("note-mod");
  note.closest("button[name='modify']").removeClass("note-mod");
  text.val(input.val())
})
