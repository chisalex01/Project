﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Models
{
    public class Client
    {
        public Guid ID { get; set; }

        public string Nume { get; set; }

        public string Prenume { get; set; }

        public string Telefon { get; set; }

        public string Cnp { get; set; }
    }
}
