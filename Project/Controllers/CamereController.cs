using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Data;
using Project.Models;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CamereController : ControllerBase
    {
        private readonly ProjectContext _context;

        public CamereController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Camere
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Camere>>> GetCamere()
        {
            return await _context.Camere.ToListAsync();
        }

        // GET: api/Camere/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Camere>> GetCamere(Guid id)
        {
            var camere = await _context.Camere.FindAsync(id);

            if (camere == null)
            {
                return NotFound();
            }

            return camere;
        }

        // PUT: api/Camere/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCamere(Guid id, Camere camere)
        {
            if (id != camere.ID)
            {
                return BadRequest();
            }

            _context.Entry(camere).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CamereExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Camere
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Camere>> PostCamere(Camere camere)
        {
            _context.Camere.Add(camere);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCamere", new { id = camere.ID }, camere);
        }

        // DELETE: api/Camere/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCamere(Guid id)
        {
            var camere = await _context.Camere.FindAsync(id);
            if (camere == null)
            {
                return NotFound();
            }

            _context.Camere.Remove(camere);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CamereExists(Guid id)
        {
            return _context.Camere.Any(e => e.ID == id);
        }
    }
}
