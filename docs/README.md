# Whatsapp Boton custom
Este componente utilizo el [Template custom](http://https://github.com/vtex-apps/react-app-template "Template custom") que nos ofrece Vtex U, con esta estructura se han podido crear el componente del boton de whatsApp.

![](https://github.com/FernandoPachon/component-custom-Button-Whastapp/blob/master/assets/botonwhatsapp.png?raw=true)

# Configuración

### 1. Clona este repositorio.

   Puedes utilizar este repositorio como guia para crear tu componente, clonalo y sigue las instrucciones.

### 2. Editar 'manifest.json'.

   En el `manifest.json` cambiaras el `"vendor"` por el de tu Partner.
   
       
   ```json
    
      "vendor": "itgloberspartnercl",
      "name": "whatsapp-button",
      "version": "0.0.1",
      "title": "Whatsapp Button Component",
      "description": "Botón de componente para whatsApp "
     
  ```
  
 *Ten encuenta la version, esta puede cambiar a la fecha de este repositorio ser creado.*
 
 ### 3. Instala directorios
 
 Usando `yarn` en la consola puedes realizar las instalaciones de los directorios necesarios, recuerda instalarlos en la carpeta `react`, si tienes problemas con las dependencias prueva usando el comando `vtex setup` en la consola.
   
### 4. Linkea el componente custom

Antes de poder renderizar el componente en tu store theme debes ejecutar el comando `vtex link`, esto instalara en tu workspace los componentes custom.

`info: Sending locale change event vtex.builder-hub@0.285.4`

*debes ver esto en la consola al final de la ejecucion del `vtex link`*

### 5. Agrega el componente

En el archivo `manifest.json` agregaras el componente correspondiente , recuerda que debes colocar tu partner antesdel `.whatsap-button"`

 ```json
    "vtex.product-price": "1.x",
    "itgloberspartnercl.whatsapp-button": "0.x",
    
  ```
 ### 6. Llama tu componente
 
 Es recomendable llamar tu componente directamente en el blocks del `store.home`, luego dale las correspondientes propiedades.
  ```json
 {
    "whatsapp-button":{
        "props":{
          "logo":"assets/img/whatsapp-logo.svg",
          "phone":"15551234567",
          "message":"Easy whatsapp",
          "width":50,
          "height":50 
        }
      } 
}
 ```
 
 ### 7. Linkea tu Store Theme
 
 Como ultimo paso, en la consola de tu trabajo base usa el comando  `vtex ls` con el fin de ver que este correctamente instalado tu componente custom, debes poder visualizar tus componentes instalados.
 
  ```json
    Linked Apps in itgloberspartnercl at workspace fernandopachon
    itgloberspartnercl.add-to-cart-info           0.0.1
    itgloberspartnercl.bullets-diagramation       0.0.1
    itgloberspartnercl.custom-department-search   0.0.1
    itgloberspartnercl.store-theme                0.0.1
    itgloberspartnercl.whatsapp-button            0.0.1 
  ```
  Cuando puedas ver tu componente custom, envia un `vtex link` en tu consola.
  
  # Creditos
  ## Fernando Pachon
