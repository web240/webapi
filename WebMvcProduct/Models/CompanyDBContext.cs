using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace WebMvcProduct.Models
{
    public class CompanyDBContext:DbContext
    {
        public CompanyDBContext() : base("CompanyContext") { }

        public DbSet<Worker> Workers { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}