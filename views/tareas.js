extends layout
 
 block content
     h1 #{title}
     each tarea in tareas
         div.well
             h3 #{tarea.nom}
             p  #{tarea.etiquetes}
             p   Realització
             .progress
                 .progress-bar.progress-bar-success(role='progressbar', aria-valuemin='0', aria-valuemax='100', style='width:'+tarea.realització+'%')        
             form(action='#')
                 input(type='submit', value='Modificar')
	      form(action='tareas/nueva')
         input(type='submit', value='Nueva Tarea')