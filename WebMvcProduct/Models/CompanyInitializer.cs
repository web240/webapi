using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMvcProduct.Models
{
    public class CompanyInitializer:System.Data.Entity.DropCreateDatabaseAlways<CompanyDBContext>
    {
        protected override void Seed(CompanyDBContext context)
        {
            var students = new List<Worker> {
                new Worker { Name="zhangsan",Sex=Sex.Male},
                new Worker { Name="lisi",Sex=Sex.Female},
                new Worker { Name="wangwu",Sex=Sex.Female},
                new Worker { Name="zhaoliu",Sex=Sex.Female}
            };
            students.ForEach(s => context.Workers.Add(s));
            context.SaveChanges();
        }
    }
}