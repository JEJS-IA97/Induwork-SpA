import LegalLayout from "../components/LegalLayout";

const TermsConditionsPage = ({ darkMode, setDarkMode }) => {
    const sections = [
        {
        title: "Identificación del Proveedor",
        content: (
            <>
            <p>
                El presente sitio web <strong>www.induwork.cl</strong> es operado por <strong>INDUWORK SpA</strong>, sociedad por acciones constituida en Chile con fecha 7 de noviembre de 2025, inscrita en el Registro de Empresas y Sociedades, RUT: 78.291.314-K, con domicilio en Antonio Bellet N°193, oficina 1210, piso 12, comuna de Providencia, Región Metropolitana de Santiago (en adelante, "INDUWORK" o "la Empresa").
            </p>
            <p>
                La actividad económica declarada ante el Servicio de Impuestos Internos corresponde a la comercialización de artículos de ferretería y seguridad online (código SII 479100 – Venta al por menor por correo, por internet y vía telefónica). Para consultas, reclamos o ejercicio de derechos, el consumidor puede contactarse a través de los canales disponibles en el sitio web.
            </p>
            </>
        ),
        },
        {
        title: "Ámbito de Aplicación y Aceptación",
        content: (
            <>
            <p>
                Los presentes Términos y Condiciones Generales (en adelante, "TyC") regulan el acceso, uso y contratación de productos a través del sitio web www.induwork.cl y constituyen el contrato de adhesión que rige la relación entre INDUWORK y cada usuario o consumidor.
            </p>
            <p>
                De conformidad con lo establecido en el artículo 12 A de la Ley N°19.496 sobre Protección de los Derechos de los Consumidores y en el artículo 4 del Decreto N°6 de 2021 que aprueba el Reglamento de Comercio Electrónico, el consentimiento no se entenderá formado si el usuario no ha tenido previamente un acceso claro, comprensible e inequívoco a las presentes condiciones generales y la posibilidad de almacenarlas o imprimirlas. La sola visita al sitio web no impone al consumidor obligación alguna.
            </p>
            <p>
                Al marcar la casilla de aceptación y/o completar el proceso de compra, el usuario declara haber leído, comprendido y aceptado íntegramente los presentes TyC, así como la Política de Privacidad y Protección de Datos Personales de INDUWORK.
            </p>
            </>
        ),
        },
        {
        title: "Productos Comercializados",
        content: (
            <>
            <p>
                INDUWORK comercializa artículos de seguridad industrial, equipos de protección personal (EPP), artículos de ferretería, herramientas, insumos de construcción, vestuario corporativo y de seguridad, accesorios tecnológicos y demás productos relacionados con su objeto social, según se ofrezcan en el catálogo disponible.
            </p>
            <p>
                Las características, especificaciones técnicas, imágenes y prestaciones esenciales de cada producto se informarán de manera clara y completa en la ficha de cada producto, conforme a lo exigido por el artículo 3 letra b) de la Ley N°19.496 y el Reglamento de Comercio Electrónico.
            </p>
            <p>
                INDUWORK se reserva el derecho de modificar, suspender o descontinuar productos de su catálogo en cualquier momento, sin que ello genere responsabilidad alguna frente a usuarios que no hayan perfeccionado una compra.
            </p>
            </>
        ),
        },
        {
        title: "Proceso de Compra y Formación del Consentimiento",
        content: (
            <>
            <p><strong>4.1. Capacidad para contratar:</strong> Podrán realizar compras personas naturales mayores de 18 años con capacidad legal para contratar y personas jurídicas debidamente representadas.</p>
            <p><strong>4.2. Pasos del proceso de compra:</strong></p>
            <ol className="list-decimal pl-5 flex flex-col gap-1">
                <li>Selección del producto o productos del catálogo y adición al carro de compras.</li>
                <li>Revisión del carro de compras, verificación de cantidades, precios unitarios y totales.</li>
                <li>Ingreso o confirmación de datos de identificación y dirección de despacho.</li>
                <li>Selección de modalidad de despacho o retiro, con indicación del costo y plazo estimado.</li>
                <li>Selección del medio de pago y procesamiento del mismo.</li>
                <li>Aceptación de los presentes TyC y Política de Privacidad.</li>
                <li>Confirmación del pedido y envío de comprobante.</li>
            </ol>
            <p><strong>4.3. Confirmación escrita del contrato:</strong> Una vez perfeccionado el contrato, INDUWORK enviará una confirmación escrita por correo electrónico con copia íntegra, clara y legible del contrato celebrado, en cumplimiento del artículo 12 A inciso tercero de la Ley N°19.496.</p>
            <p><strong>4.4. Medios para identificar y corregir errores:</strong> Antes de confirmar la compra, el usuario podrá revisar y corregir sus datos. Para correcciones posteriores, deberá contactar a INDUWORK a la brevedad a través de los canales habilitados.</p>
            </>
        ),
        },
        {
        title: "Precios e Información Comercial",
        content: (
            <>
            <p>
                Todos los precios publicados en www.induwork.cl se expresan en pesos chilenos (CLP) e incluyen el Impuesto al Valor Agregado (IVA), salvo indicación expresa en contrario. Los precios corresponden al valor unitario de cada producto.
            </p>
            <p>
                Conforme al artículo 30 de la Ley N°19.496 y al Reglamento de Comercio Electrónico, los precios serán informados de modo claramente visible antes de la formalización de la compra. INDUWORK se reserva el derecho de modificar sus precios en cualquier momento, respetando el precio vigente al momento del perfeccionamiento del contrato.
            </p>
            <p>
                En caso de error manifiesto en el precio publicado (error material, técnico o informático), INDUWORK informará al consumidor a la brevedad y le ofrecerá la posibilidad de confirmar la compra al precio correcto o de retractarse sin costo alguno.
            </p>
            </>
        ),
        },
        {
        title: "Stock y Disponibilidad",
        content: (
            <>
            <p>
                Conforme al artículo 12 del Decreto N°6 de 2021 (Reglamento de Comercio Electrónico), INDUWORK informará al consumidor, de forma previa a la contratación, la inexistencia de stock o la no disponibilidad de un producto de forma clara y visible.
            </p>
            <p>
                En caso de que, una vez perfeccionado el contrato y procesado el pago, no sea posible dar cumplimiento al mismo por falta de stock o caso fortuito, INDUWORK contactará al consumidor de forma oportuna para ofrecer una alternativa equivalente o proceder a la devolución íntegra de las sumas pagadas.
            </p>
            </>
        ),
        },
        {
        title: "Medios de Pago",
        content: (
            <>
            <p>
                INDUWORK pondrá a disposición del consumidor los medios de pago habilitados en el sitio web al momento de la compra. Los pagos son procesados a través de plataformas de pago seguras con protocolos de encriptación estándar de la industria.
            </p>
            <p>
                INDUWORK no almacena datos de tarjetas bancarias. El procesamiento de los datos de pago es realizado directamente por los operadores de las plataformas correspondientes.
            </p>
            </>
        ),
        },
        {
        title: "Despacho y Entrega",
        content: (
            <>
            <p><strong>8.1. Información previa sobre el despacho:</strong> De conformidad con la Ley N°21.398, INDUWORK informará claramente antes del perfeccionamiento del contrato el costo total del servicio de despacho y el tiempo estimado de entrega.</p>
            <p><strong>8.2. Plazos de entrega:</strong> Los plazos informados son estimados y pueden verse afectados por factores externos de fuerza mayor o restricciones de movilidad, lo cual será informado oportunamente.</p>
            <p><strong>8.3. Verificación al momento de la recepción:</strong> El consumidor deberá verificar el estado del producto al momento de recibirlo. Si el embalaje presenta daños visibles, se recomienda dejarlo consignado y contactar a INDUWORK a la brevedad.</p>
            </>
        ),
        },
        {
        title: "Derecho de Retracto",
        content: (
            <>
            <p><strong>9.1. Procedencia y plazo:</strong> De conformidad con el artículo 3° bis de la Ley N°19.496, el consumidor podrá poner término unilateral al contrato, sin expresión de causa, dentro del plazo de 10 días corridos desde la recepción del producto. Si INDUWORK no hubiere cumplido con remitir la confirmación escrita del contrato, el plazo se extenderá a 90 días corridos.</p>
            <p><strong>9.2. Excepciones:</strong> No podrá ejercerse el derecho de retracto cuando el producto se haya deteriorado por hecho imputable al consumidor, bienes que puedan deteriorarse o caducar con rapidez, productos a medida o personalizados, ni bienes de uso personal.</p>
            <p><strong>9.3. Efectos del retracto:</strong> INDUWORK devolverá íntegramente las sumas abonadas dentro de los 45 días corridos siguientes a la comunicación del retracto. El consumidor deberá restituir el producto en buen estado con su embalaje y elementos originales.</p>
            <p><strong>9.4. Cómo ejercerlo:</strong> Comunicarlo expresamente indicando número de pedido y producto a través de los canales de atención de www.induwork.cl.</p>
            </>
        ),
        },
        {
        title: "Garantía Legal",
        content: (
            <>
            <p><strong>10.1. Derecho irrenunciable:</strong> Conforme al artículo 20 de la Ley N°19.496, en caso de fallas u ocultación de defectos, el consumidor tiene derecho irrenunciable a optar entre: a) Reparación gratuita, b) Reposición del bien, o c) Devolución de la cantidad pagada. Procede cuando el producto presente defectos ocultos, no corresponda a las especificaciones o venga incompleto.</p>
            <p><strong>10.2. Plazo:</strong> El consumidor dispone de un plazo de 6 meses contados desde la recepción del producto para hacer efectiva la garantía legal (plazo suspendido durante la reparación).</p>
            <p><strong>10.3. Garantía convencional:</strong> Si el fabricante ofrece una garantía adicional, esta se informará en la ficha del producto sin limitar los derechos legales.</p>
            <p><strong>10.4. Responsabilidad solidaria:</strong> El consumidor puede dirigirse indistinta o conjuntamente al vendedor, fabricante o importador para la reparación.</p>
            </>
        ),
        },
        {
        title: "Política de Cambios y Devoluciones",
        content: (
            <>
            <p>Sin perjuicio de los derechos legales irrenunciables, el procedimiento es el siguiente:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Contactar a INDUWORK a través de sus canales oficiales indicando pedido y motivo.</li>
                <li>INDUWORK evaluará y comunicará la resolución en un plazo razonable.</li>
                <li>Los productos deben ser devueltos en su embalaje original con todos sus accesorios y documentación.</li>
                <li>No se impondrán exigencias superiores a las establecidas en la ley.</li>
            </ul>
            </>
        ),
        },
        {
        title: "Protección de Datos Personales",
        content: (
            <>
            <p><strong>12.1. Marco normativo:</strong> Se rige por la Ley N°19.628. Se adecuarán procesos a la Ley N°21.719 que entra en vigencia el 1° de diciembre de 2026.</p>
            <p><strong>12.2. Responsable del tratamiento:</strong> INDUWORK SpA, RUT 78.291.314-K, Antonio Bellet N°193, oficina 1210, Providencia, Santiago.</p>
            <p><strong>12.3. Datos recopilados:</strong> Nombre, RUT, correo, teléfono, dirección de despacho, datos de navegación y compras (sin almacenar tarjetas de crédito/débito).</p>
            <p><strong>12.4. Finalidad:</strong> Gestión y despacho de pedidos, atención al cliente, cumplimiento de obligaciones fiscales y envío de ofertas (solo bajo consentimiento expreso).</p>
            <p><strong>12.5. Consentimiento:</strong> Otorgado al aceptar los TyC. Puede revocarse por escrito en cualquier momento.</p>
            <p><strong>12.6. Comunicación a terceros:</strong> Solo a empresas de transporte/logística, pasarelas de pago o por requerimiento legal. No se comercializan ni ceden datos a terceros.</p>
            <p><strong>12.7. Seguridad:</strong> Medidas técnicas para prevenir pérdida o acceso no autorizado. Personal sujeto a secreto profesional.</p>
            <p><strong>12.8. Derechos ARCO:</strong> Todo usuario puede ejercer gratuitamente los derechos de Acceso, Rectificación, Cancelación, Bloqueo u Oposición dirigiéndose por escrito a INDUWORK.</p>
            <p><strong>12.9. Cookies:</strong> Utilizadas para mejorar la experiencia de usuario. Pueden ser desactivadas desde la configuración del navegador.</p>
            </>
        ),
        },
        {
        title: "Propiedad Intelectual",
        content: (
            <>
            <p>
                Todos los contenidos de www.induwork.cl (textos, imágenes, marcas, logotipos, código fuente) son propiedad exclusiva de INDUWORK SpA o sus licenciantes. Queda prohibida su reproducción o distribución sin autorización previa por escrito.
            </p>
            </>
        ),
        },
        {
        title: "Limitación de Responsabilidad",
        content: (
            <>
            <p>
                INDUWORK no se hace responsable por interrupciones del servicio por fallas técnicas o mantenimiento, informando siempre que sea posible. Lo anterior no limita en ningún caso los derechos irrenunciables del consumidor fijados en la Ley N°19.496.
            </p>
            </>
        ),
        },
        {
        title: "Cláusulas Abusivas y Contratos de Adhesión",
        content: (
            <>
            <p>
                Los presentes TyC no contienen cláusulas que permitan la modificación unilateral del contrato perfeccionado, limitaciones absolutas de responsabilidad ni vacíos que generen un desequilibrio injustificado en perjuicio del consumidor.
            </p>
            </>
        ),
        },
        {
        title: "Resolución de Conflictos y Legislación Aplicable",
        content: (
            <>
            <p>
                Los presentes TyC se rigen por la legislación chilena (Ley N°19.496, Ley N°19.628 y Decreto N°6 de 2021).
            </p>
            <p>En caso de controversia, el consumidor podrá:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>Contactar a INDUWORK directamente para solucionar el inconveniente.</li>
                <li>Ingresar un reclamo formal ante el Servicio Nacional del Consumidor (SERNAC).</li>
                <li>Acudir al Juzgado de Policía Local competente.</li>
            </ul>
            </>
        ),
        },
        {
        title: "Modificaciones a los Términos y Condiciones",
        content: (
            <>
            <p>
                INDUWORK podrá actualizar los presentes TyC publicando la última versión en el sitio web. Las modificaciones aplicarán a las compras realizadas con posterioridad a dicha fecha de publicación.
            </p>
            </>
        ),
        },
        {
        title: "Contacto y Atención al Cliente",
        content: (
            <>
            <p>
                Para consultas, reclamos o ejercicio de derechos legales o de protección de datos, el usuario puede contactar a INDUWORK SpA mediante los canales de atención habilitados en <strong>www.induwork.cl</strong>.
            </p>
            </>
        ),
        },
    ];

    return (
        <LegalLayout
        title="Términos y Condiciones Generales de Uso y Contratación"
        lastUpdated="Septiembre 2026"
        sections={sections}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />
    );
    };

export default TermsConditionsPage;