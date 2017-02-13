using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMvcProduct.Models
{
    public enum Sex { Male,Female}
    public class Worker
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Sex Sex{ get; set; }
        public double? Rating { get; set; }
    }
}