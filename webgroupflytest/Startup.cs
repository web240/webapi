using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebGroupflyTest.Startup))]
namespace WebGroupflyTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
