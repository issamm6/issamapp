extends layout
 
 block content
     h1 #{title}
     form(action='/tareas', method='post')
       | Nombre Tarea:
       br
       input(type='text', name='nomTarea', required='')
       br
       |     Etiquetas (separados por comas):
       br
       input(type='text', name='etiquetas', required='')
       br
       |     Realització
       br
       input(name='percent', type='number', required='')
       br
       br
       input(type='submit', value='Submit') 