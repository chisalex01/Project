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
    public class ClientiController : ControllerBase
    {
        private readonly ProjectContext _context;

        public ClientiController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Clienti
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClienti()
        {
            return await _context.Clienti.ToListAsync();
        }

        // GET: api/Clienti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClienti(Guid id)
        {
            var clienti = await _context.Clienti.FindAsync(id);

            if (clienti == null)
            {
                return NotFound();
            }

            return clienti;
        }

        // PUT: api/Clienti/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClienti(Guid id, Client clienti)
        {
            if (id != clienti.ID)
            {
                return BadRequest();
            }

            _context.Entry(clienti).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientiExists(id))
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

        // POST: api/Clienti
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClienti(Client clienti)
        {
            _context.Clienti.Add(clienti);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClienti", new { id = clienti.ID }, clienti);
        }

        // DELETE: api/Clienti/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClienti(Guid id)
        {
            var clienti = await _context.Clienti.FindAsync(id);
            if (clienti == null)
            {
                return NotFound();
            }

            _context.Clienti.Remove(clienti);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientiExists(Guid id)
        {
            return _context.Clienti.Any(e => e.ID == id);
        }
    }
}
