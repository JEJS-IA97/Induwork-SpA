import LegalLayout from "../components/LegalLayout";

const PrivacyPolicesPage = ({ darkMode, setDarkMode }) => {
const sections = [
        {
        title: "Identificación del Responsable del Tratamiento",
        content: (
            <>
            <p>
                El responsable del tratamiento de los datos personales recolectados a través del sitio web <strong>www.induwork.cl</strong> es:
            </p>
            <div className="overflow-x-auto my-2">
                <table className="w-full text-left text-xs border-collapse border border-gray-200 dark:border-zinc-800">
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-zinc-800">
                    <td className="p-2 font-bold bg-gray-50 dark:bg-zinc-900 w-1/3">Razón Social</td>
                    <td className="p-2">INDUWORK SpA</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-zinc-800">
                    <td className="p-2 font-bold bg-gray-50 dark:bg-zinc-900">RUT</td>
                    <td className="p-2">78.291.314-K</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-zinc-800">
                    <td className="p-2 font-bold bg-gray-50 dark:bg-zinc-900">Domicilio Legal</td>
                    <td className="p-2">Antonio Bellet N° 193, oficina 1210, piso 12, Providencia, Santiago, Chile</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-zinc-800">
                    <td className="p-2 font-bold bg-gray-50 dark:bg-zinc-900">Actividad Comercial</td>
                    <td className="p-2">Comercialización online de artículos de ferretería, herramientas y equipos de seguridad laboral</td>
                    </tr>
                    <tr>
                    <td className="p-2 font-bold bg-gray-50 dark:bg-zinc-900">Canal de Privacidad</td>
                    <td className="p-2">Formulario en www.induwork.cl (Sección «Privacidad y Datos Personales»)</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <p>
                INDUWORK SpA declara que toda persona que autorice el tratamiento de sus datos personales será debidamente informada respecto del propósito del almacenamiento, su posible comunicación a terceros y el plazo de conservación previsto.
            </p>
            </>
        ),
        },
        {
        title: "Marco Normativo Aplicable",
        content: (
            <>
            <p>El tratamiento de datos personales efectuado por INDUWORK SpA se rige por los siguientes cuerpos normativos:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li><strong>Ley N° 19.628:</strong> Sobre Protección de los Datos Personales (actualmente en vigor).</li>
                <li><strong>Ley N° 21.719:</strong> Publicada el 13 de diciembre de 2024, crea la Agencia de Protección de Datos Personales y entra en vigencia plena el 1° de diciembre de 2026.</li>
                <li><strong>Ley N° 19.496:</strong> Sobre Protección de los Derechos de los Consumidores (art. 15 bis).</li>
                <li><strong>Decreto N° 6 de 2021:</strong> Del Ministerio de Economía, que aprueba el Reglamento de Comercio Electrónico.</li>
            </ul>
            </>
        ),
        },
        {
        title: "Principios que Rigen el Tratamiento",
        content: (
            <>
            <p>INDUWORK SpA trata los datos personales de sus usuarios conforme a ocho principios legales fundamentales:</p>
            <p><strong>3.1. Licitud y Lealtad:</strong> Trata los datos de manera lícita, acreditando en todo momento la accountability de la gestión.</p>
            <p><strong>3.2. Finalidad:</strong> Recolectados para fines específicos, explícitos y lícitos comunicados al titular.</p>
            <p><strong>3.3. Proporcionalidad y Minimización:</strong> Solo los datos estrictamente necesarios para cumplir con los objetivos informados.</p>
            <p><strong>3.4. Calidad y Exactitud:</strong> Los datos deben ser exactos, completos, actuales y pertinentes.</p>
            <p><strong>3.5. Seguridad:</strong> Estándares de protección contra accesos no autorizados, pérdidas o filtraciones.</p>
            <p><strong>3.6. Confidencialidad:</strong> Deber de secreto aplicable al personal y prestadores incluso tras finalizar la relación laboral.</p>
            <p><strong>3.7. Transparencia e Información:</strong> Disponibilidad permanente, clara y gratuita de esta Política de Privacidad.</p>
            <p><strong>3.8. Responsabilidad Proactiva (Accountability):</strong> Medidas internas implementadas para demostrar el cumplimiento normativo.</p>
            </>
        ),
        },
        {
        title: "Datos Personales que se Recopilan",
        content: (
            <>
            <p><strong>4.1. Proporcionados directamente por el usuario:</strong> Nombre completo, RUT/Cédula, correo electrónico, teléfono, dirección de despacho, historial de pedidos y mensajes enviados a servicio al cliente.</p>
            <p><strong>4.2. Datos técnicos de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, comportamiento dentro del sitio web y cookies de sesión.</p>
            <p><strong>4.3. Declaración expresa sobre datos sensibles:</strong> INDUWORK SpA declara que <strong>NO recopila ni trata datos personales sensibles</strong> (tales como origen étnico, salud, convicciones religiosas o datos biométricos).</p>
            </>
        ),
        },
        {
        title: "Finalidades del Tratamiento",
        content: (
            <>
            <p>Los datos se recopilan para las siguientes finalidades principales:</p>
            <ol className="list-decimal pl-5 flex flex-col gap-1">
                <li>Gestión, procesamiento y despacho de pedidos realizados a través del sitio web.</li>
                <li>Confirmación escrita del contrato y notificaciones sobre el estado de la entrega.</li>
                <li>Emisión de documentos tributarios (boletas y facturas electrónicas) ante el SII (conservación por 6 años).</li>
                <li>Atención de solicitudes postventa, retracto y garantía legal.</li>
                <li>Gestión de cuenta de usuario (eliminación tras 3 años de inactividad).</li>
                <li>Análisis estadístico e interés legítimo de mejora continua del servicio.</li>
                <li>Envío de promociones y ofertas (requiere un consentimiento <em>opt-in</em> independiente del usuario).</li>
            </ol>
            </>
        ),
        },
        {
        title: "Base de Licitud y Consentimiento",
        content: (
            <>
            <p>
                El tratamiento de datos se fundamenta en el consentimiento expreso otorgado libremente por el titular mediante casillas activas (para marketing), la ejecución del contrato de compraventa (para el procesamiento de compras), el cumplimiento de obligaciones legales tributarias/de consumo y el interés legítimo de la empresa.
            </p>
            </>
        ),
        },
        {
        title: "Comunicación de Datos a Terceros",
        content: (
            <>
            <p>INDUWORK solo comunicará información personal a:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Empresas de transporte y logística autorizadas para la entrega de productos.</li>
                <li>Operadores de plataformas de pago seguras (sin almacenar datos de tarjetas bancarias).</li>
                <li>Proveedores de hosting y tecnología bajo contratos de estricta confidencialidad.</li>
                <li>Servicio de Impuestos Internos (SII) y organismos públicos por requerimiento legal.</li>
            </ul>
            <p><strong>INDUWORK SpA no vende, cede ni comercializa datos personales a terceros con fines comerciales propios.</strong></p>
            </>
        ),
        },
        {
        title: "Seguridad de los Datos Personales",
        content: (
            <>
            <p>
                Se implementan protocolos de cifrado SSL/TLS, restricciones de acceso por perfil, monitoreo técnico periódico e historial de auditoría interna para proteger los datos contra incidentes.
            </p>
            <p><strong>Protocolo de brechas de seguridad:</strong> En caso de vulneraciones a la seguridad, INDUWORK contendrá el incidente, notificará a las autoridades correspondientes y se comunicará directamente con los usuarios afectados. En cumplimiento del principio de accountability, ante cualquier incidente es responsabilidad de INDUWORK demostrar la correcta implementación de sus medidas de seguridad.</p>
            </>
        ),
        },
        {
        title: "Derechos del Titular de los Datos",
        content: (
            <>
            <p>Todo usuario tiene los siguientes derechos irrenunciables sobre su información personal:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li><strong>Acceso:</strong> Obtener confirmación e información sobre el tratamiento de sus datos.</li>
                <li><strong>Rectificación:</strong> Modificar información inexacta o incompleta.</li>
                <li><strong>Supresión / Cancelación:</strong> Solicitar la eliminación de datos caducos o innecesarios.</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento con fines de marketing o interés legítimo.</li>
                <li><strong>Bloqueo:</strong> Solicitar la suspensión temporal mientras se procesa una rectificación.</li>
                <li><strong>Portabilidad:</strong> Solicitar copia en formato electrónico estructurado (conforme a la entrada en vigor de la Ley N° 21.719).</li>
            </ul>
            <p>
                Las solicitudes pueden presentarse a través de los canales oficiales de contacto y serán gestionadas dentro de los plazos legales establecidos.
            </p>
            </>
        ),
        },
        {
        title: "Cookies y Tecnologías de Seguimiento",
        content: (
            <>
            <p>www.induwork.cl utiliza cookies categorizadas en:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li><strong>Esenciales:</strong> Imprescindibles para el funcionamiento del carro de compras y navegación.</li>
                <li><strong>Analíticas:</strong> Miden el tráfico web para fines estadísticos (requieren consentimiento).</li>
                <li><strong>Marketing / Personalización:</strong> Utilizadas para adaptar la publicidad según preferencias (requieren consentimiento activo <em>opt-in</em>).</li>
            </ul>
            <p>El usuario puede administrar o deshabilitar las cookies no esenciales mediante la configuración de su navegador web.</p>
            </>
        ),
        },
        {
        title: "Transferencia Internacional de Datos",
        content: (
            <>
            <p>
                En caso de utilizar servicios de hosting o software en la nube ubicados fuera de Chile, INDUWORK garantiza que dichos proveedores cuenten con certificaciones internacionales de seguridad (ISO 27001, SOC 2) y cláusulas contractuales estándar equivalentes a la protección exigida por la ley chilena.
            </p>
            </>
        ),
        },
        {
        title: "Adecuación a la Ley N° 21.719 (Hoja de Ruta)",
        content: (
            <>
            <p>
                Con miras a la plena vigencia de la Ley N° 21.719 fijada para el 1° de diciembre de 2026, INDUWORK SpA mantiene una hoja de ruta proactiva que contempla la mantención del Registro de Actividades de Tratamiento (RAT), evaluaciones de impacto (EIPD), protocolos de notificación de brechas y adaptación permanente de sus programas de privacidad desde el diseño.
            </p>
            </>
        ),
        },
        {
        title: "Modificaciones a la Política de Privacidad",
        content: (
            <>
            <p>
                INDUWORK podrá actualizar este documento publicando la versión vigente en www.induwork.cl. En caso de cambios sustanciales que afecten derechos de los usuarios, se enviará una notificación previa por correo electrónico.
            </p>
            </>
        ),
        },
        {
        title: "Contacto y Atención al Cliente",
        content: (
            <>
            <p>
                Para resolver dudas o ejercitar los derechos de protección de datos personales, el usuario puede enviar su consulta a través del formulario oficial en el sitio web de INDUWORK SpA o escribir directamente a los canales de atención al cliente.
            </p>
            </>
        ),
        },
    ];

    return (
        <LegalLayout
        title="Política de Privacidad y Protección de Datos Personales"
        lastUpdated="Abril 2026"
        sections={sections}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />
    );
};

export default PrivacyPolicesPage;