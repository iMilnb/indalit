indalitdesc = `
  **Indalit Cloud Consulting**

  Fisicamente situados en [Valencia, España](https://www.google.com/maps/place/Valencia,+Spain),
  somos una empresa de consultoría con mas de 20 años de experiencia en tecnologías del
  Internet. Especializados en arquitecturas en la nube, nuestro trabajo es seguir
  y acompañarle con sus proyectos de diseño e implementación de infraestructuras.
`

awstooltip = `
  **Amazon Web Services**

  El lider de los proveedores de servicios en la nube,
  casa de **miles** de combinaciones, donde las certificaciones no solo son
  buenas, sino obligatorias de tener! ( y tenemos ;) )

  _Tags:_ \`[EC2, AutoScaling, S3, Lambda, CloudFormation]\`
`

gcptooltip = `
  **Google Cloud Platform**

  El desafiador numero uno de AWS, con ventaja masiva en el universo
  de los containers y del BigData.

  _Tags:_ \`[App Engine, BigQuery, BigTable, Compute Engine]\`
`

hashicorptooltip = `
  **HashiCorp**

  Estos son los "cool kids" de la nube, Terraform, Packer, Vagrant, Vault... todas estas
  herramientas que utilizamos todos los días para mantener nuestra architectura como codigo
  los han ecrito ellos.

  _Tags:_ \`[Terraform, Packer, Vagrant, Vault, Consul]\`
`

ansibletooltip = `
  **Ansible**

  Software de gestion de configuración hay miles, y los conocemos todos, lo que hace Ansible
  diferente, es la facilidad de uso. No agentes, no programación, solo _playbooks_!

  _Tags:_ \`[Automation, Orchestration, Playbooks]\`
`

linuxtooltip = `
  **GNU/Linux**

  ¿De verdad tenemos que explicar lo que es GNU / Linux? Desde su teléfono móvil a su automóvil
  incluso su TV, GNU/Linux está en todos lados, y esa es una buena noticia, como hemos estado
  usando,   configurándolo y contribuyendo a este ecosisistema durante mas de 20 años ;)

  _Tags:_ \`[Operating System, Debian, Ubuntu, RedHat, CoreOS]\`
`

dockertooltip = `
  **Docker**

  _Docker_ es la ola gigante que lo lleva todo con ella, y que nos hace repensar nuestros antiguos
  modelos de desplegue. Micro-servicios, infraestructura inmutable, intgración y entrega continua,
  esos temas no son moda, representan una nueva manera de gestionar sus aplicaciónes.

  _Tags:_ \`[Container, docker, docker-compose, Kubernetes]\`
`

var indalit = new Vue({
  el: '#indalit',
  data: {
    technos: [
      {
        link: 'https://aws.amazon.com',
        img: 'images/aws_white.png',
        alt: 'Amazon Web Services',
        tooltip: awstooltip
      },
      {
        link: 'https://cloud.google.com/',
        img: 'images/GCP_white.png',
        alt: 'Google Cloud Platform',
        tooltip: gcptooltip
      },
      {
        link: 'https://www.hashicorp.com/',
        img: 'images/HashiCorp_white.png',
        alt: 'HashiCorp',
        tooltip: hashicorptooltip
      },
      {
        link: 'https://www.ansible.com/',
        img: 'images/Ansible_white.png',
        alt: 'Ansible',
        tooltip: ansibletooltip
      },
      {
        link: 'https://www.linux.com/',
        img: 'images/Linux_white.png',
        alt: 'GNU/Linux',
        tooltip: linuxtooltip
      },
      {
        link: 'https://www.docker.com/',
        img: 'images/docker_white.png',
        alt: 'Docker',
        tooltip: dockertooltip
      }
    ],
    indalittooltip: indalitdesc
  },

  mounted: function() {
    $('[data-toggle="tooltip"]').tooltip();
  }
})
