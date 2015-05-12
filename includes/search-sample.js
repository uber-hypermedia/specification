{
  "uber" : 
  {
    "version" : "1.0", 
    "data" :
    [
      { 
        "rel" : ["self"], 
        "url" : "http://example.org/"
      },
      {
        "name" : "list", 
        "label" : "ToDo List",
        "rel" : ["collection"], 
        "url" : "http://example.org/list/"
      },
      {
        "name" : "search", 
        "label" : "Search",
        "rel" : ["search","collection"],
        "url" : "http://example.org/search{?title}",
        "templated" : "true"
      },
      {
        "name" : "todo",
        "rel" : ["item","http://example.org/rels/todo"],
        "url" : "http://example.org/list/1",
        "data" : 
        [
          {"name" : "title", "label" : "Title", "value" : "Clean house"},
          {"name" : "dueDate", "label" : "Date Due", "value" : "2014-05-01"}
        ]
      },
      {
        "name" : "todo",
        "rel" : ["item","http://example.org/rels/todo"],
        "url" : "http://example.org/list/2",
        "data" : 
        [
          {"name" : "title", "label" : "Title", "value" : "Paint the fence"},
          {"name" : "dueDate", "label" : "Date Due", "value" : "2014-06-01"}
        ]
      }
    ]    
  }
}
