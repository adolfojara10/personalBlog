namespace API.Entities;

public class Post
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateOnly DatePublished { get; set; }

    public List<Photo> Photos { get; set; } = new();
}