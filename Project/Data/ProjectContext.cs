using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project.Models;

namespace Project.Data
{
    public class ProjectContext : DbContext
    {
        public ProjectContext (DbContextOptions<ProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Project.Models.Angajati> Angajati { get; set; }

        public DbSet<Project.Models.Camere> Camere { get; set; }

        public DbSet<Project.Models.Clienti> Clienti { get; set; }
    }
}
