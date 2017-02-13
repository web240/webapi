using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebMvcProduct.Models
{
    public class ProductDBContext:DbContext
    {
        DbSet<Product> Products { get; set; }
    }
}