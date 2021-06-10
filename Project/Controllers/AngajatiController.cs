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
    public class AngajatiController : ControllerBase
    {
        private readonly ProjectContext _context;

        public AngajatiController(ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Angajati
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Angajat>>> GetAngajati()
        {
            return await _context.Angajati.ToListAsync();
        }

        // GET: api/Angajati/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Angajat>> GetAngajati(Guid id)
        {
            var angajati = await _context.Angajati.FindAsync(id);

            if (angajati == null)
            {
                return NotFound();
            }

            return angajati;
        }

        // PUT: api/Angajati/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAngajati(Guid id, Angajat angajati)
        {
            if (id != angajati.ID)
            {
                return BadRequest();
            }

            _context.Entry(angajati).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AngajatiExists(id))
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

        // POST: api/Angajati
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Angajat>> PostAngajati(Angajat angajati)
        {
            _context.Angajati.Add(angajati);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAngajati", new { id = angajati.ID }, angajati);
        }

        // DELETE: api/Angajati/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAngajati(Guid id)
        {
            var angajati = await _context.Angajati.FindAsync(id);
            if (angajati == null)
            {
                return NotFound();
            }

            _context.Angajati.Remove(angajati);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AngajatiExists(Guid id)
        {
            return _context.Angajati.Any(e => e.ID == id);
        }
    }
}
