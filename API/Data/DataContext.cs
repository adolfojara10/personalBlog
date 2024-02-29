using API.Entities;
using Microsoft.EntityFrameworkCore;


namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    public DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Photo>()
            .HasOne(p => p.Post) // Each photo belongs to one post
            .WithMany(p => p.Photos) // Each post can have multiple photos
            .HasForeignKey(p => p.PostId); // Foreign key

        // Additional configurations can go here
    }
}