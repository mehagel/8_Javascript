$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    
    add();
    remove();
    complete();
  }

  function add() {
    $('.add').on('click', function() {
      var text = ($('.todo').val());
      $('.todo_list').append(buildTodo(text));
      $('#todo_input').val('').focus();
      $
    })
  }
  
  function remove() {
    $(".todo_list").on('click', '.delete', function() {
      $(this).closest('.todo').remove();
    });
  }

    function complete() {
    $(".todo_list").on('click', '.complete', function() {
      $(this).text("Complete!");
    });
    
  }
  
  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  
  bindEvents();
});
