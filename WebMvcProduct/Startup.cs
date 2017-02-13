using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebMvcProduct.Startup))]
namespace WebMvcProduct
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
