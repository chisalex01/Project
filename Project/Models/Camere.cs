using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Models
{
    public class Camere
    {
        public Guid ID { get; set; }

        public string Tip { get; set; }

        public string Pret { get; set; }

        public string Status { get; set; }
    }
}
