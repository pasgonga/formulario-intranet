function sendForm(event) {
  event.preventDefault();

  const form = document.getElementById('contratacion-form');
  const formData = new FormData(form);
  let formContent = "FORMULARIO DE CONTRATACIÓN INTRANET AAVV.COM\n\n";

  formContent += "DATOS DE LA AGENCIA SOLICITANTE\n";
  formContent += `Razón Social: ${formData.get('razonSocial')}\n`;
  formContent += `CIF: ${formData.get('cif')}\n`;
  formContent += `Nombre Comercial: ${formData.get('nombreComercial') || 'N/A'}\n`;
  formContent += `Domicilio Social: ${formData.get('domicilioSocial')}\n`;
  formContent += `Código Postal: ${formData.get('codigoPostal')}\n`;
  formContent += `Población: ${formData.get('poblacion')}\n`;
  formContent += `Provincia: ${formData.get('provincia')}\n`;
  formContent += `Teléfono: ${formData.get('telefono')}\n`;
  formContent += `Fax: ${formData.get('fax') || 'N/A'}\n`;
  formContent += `E-mail: ${formData.get('email')}\n`;
  formContent += `Representante Legal: ${formData.get('representanteLegal')}\n`;
  formContent += `Título-Licencia Agencia: ${formData.get('tituloLicencia')}\n`;
  formContent += `IATA: ${formData.get('iata')}\n`;
  formContent += `Título IATA: ${formData.get('tituloIATA') || 'N/A'}\n`;
  formContent += `Grupos y/o Asociaciones: ${formData.get('grupos') || 'N/A'}\n\n`;

  formContent += "DATOS DE LAS SUCURSALES\n";
  formContent += "Sucursal 1\n";
  formContent += `Domicilio: ${formData.get('sucursal1Domicilio') || 'N/A'}\n`;
  formContent += `Código Postal: ${formData.get('sucursal1CP') || 'N/A'}\n`;
  formContent += `Población: ${formData.get('sucursal1Poblacion') || 'N/A'}\n`;
  formContent += `Provincia: ${formData.get('sucursal1Provincia') || 'N/A'}\n`;
  formContent += `Teléfono: ${formData.get('sucursal1Telefono') || 'N/A'}\n`;
  formContent += `Email: ${formData.get('sucursal1Email') || 'N/A'}\n\n`;
  formContent += "Sucursal 2\n";
  formContent += `Domicilio: ${formData.get('sucursal2Domicilio') || 'N/A'}\n`;
  formContent += `Código Postal: ${formData.get('sucursal2CP') || 'N/A'}\n`;
  formContent += `Población: ${formData.get('sucursal2Poblacion') || 'N/A'}\n`;
  formContent += `Provincia: ${formData.get('sucursal2Provincia') || 'N/A'}\n`;
  formContent += `Teléfono: ${formData.get('sucursal2Telefono') || 'N/A'}\n`;
  formContent += `Email: ${formData.get('sucursal2Email') || 'N/A'}\n\n`;

  formContent += "DATOS DE CONTRATACIÓN\n";
  formContent += `Aplicación de Gestión utilizada: ${formData.get('gestion')}\n`;
  formContent += `Otra Aplicación (si aplica): ${formData.get('gestionOtroDetalle') || 'N/A'}\n`;
  formContent += `GDS utilizado: ${formData.get('gds')}\n`;
  formContent += `Otro GDS (si aplica): ${formData.get('gdsOtroDetalle') || 'N/A'}\n`;
  formContent += `Proveedores seleccionados: ${formData.getAll('proveedores[]').join(', ') || 'Ninguno'}\n\n`;

  formContent += "INTRANET AAVV.COM\n";
  formContent += `Número de Usuarios: ${formData.get('numUsuarios')}\n`;
  formContent += `Activar BSPConvert: ${formData.get('activarBSP') ? 'Sí' : 'No'}\n`;
  formContent += `Códigos IATA: ${formData.get('codigosIATA') || 'N/A'}\n`;
  formContent += `Subdominio: ${formData.get('activarSubdominio') ? formData.get('subdominio') : 'No'}\n`;
  formContent += `Dominios Propios: ${formData.get('dominiosPropios') ? formData.get('dominios') : 'No'}\n`;
  formContent += `Fecha: ${formData.get('dia')} de ${formData.get('mes')} de ${formData.get('anio')}\n\n`;

  const blob = new Blob([formContent], { type: 'text/plain' });
  const fileUrl = URL.createObjectURL(blob);

  const subject = encodeURIComponent('Formulario de Contratación Intranet AAVV.com');
  const emailBody = encodeURIComponent('Adjunto el formulario cumplimentado.');
  const mailtoLink = `mailto:pastora@pipeline.es?subject=${subject}&body=${emailBody}&attachment=${fileUrl}`;

  window.location.href = mailtoLink;

  setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
}