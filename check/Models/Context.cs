using check.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace checks.Model
{
    
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options)
              : base(options)
        { }
        public DbSet<Entity> Entities { get; set; }
    }
}
