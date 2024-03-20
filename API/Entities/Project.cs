namespace API.Entities;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateOnly DatePublished { get; set; }

    public List<PhotoProject> Photos { get; set; } = new();
}