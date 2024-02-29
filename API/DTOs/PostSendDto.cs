namespace API.DTOs;

public class PostSendDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string PhotoUrl { get; set; }

    public string Content { get; set; }
    public DateOnly DatePublished { get; set; }

    public List<PhotoDto> Photos { get; set; }
}