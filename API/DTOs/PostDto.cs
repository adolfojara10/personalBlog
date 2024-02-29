using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs;

public class PostDto
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string Content { get; set; }
    public List<Photo> Photos { get; set; }
}